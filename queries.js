const Pool = require('pg').Pool;
const md5 = require('md5');
const randomstring = require('randomstring');

const pool = new Pool({
    user: 'ayyxvxcawvxmbm',
    host: 'ec2-34-240-75-196.eu-west-1.compute.amazonaws.com',
    database: 'd9qfgv471omc11',
    password: 'f6a3a01dd90a0c2293043b70a22071617a3d7a1d13c9885ed094db2c9ba4deaa',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const checkLogin = (request, response) => {
    const login = request.params.login;
    pool.query(`SELECT is_login_available('${ login }')`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows[0]);
    });
}

const getToken = async () => {
    let token;
    let token_accepted = false;
    while (!token_accepted) {
        token = randomstring.generate(20);
        await pool
            .query(`SELECT is_token_available('${ token }')`)
            .then((result) => {
                if (result.rows[0].is_token_available === true) {
                    token_accepted = true;
                }
            })
            .catch((error) => console.log(error.stack));
    }
    return token;
}

const createUser = (request, response) => {
    const { login, password } = request.body;
    const password_hash = md5(password);
    getToken()
        .then((token) => {
            pool
                .query(`SELECT * FROM create_user('${ login }', '${ password_hash }', '${ token }')`)
                .then((results) => {
                    const result_object = results.rows[0];
                    result_object.role = 'user';
                    response.status(200).json(result_object);
                })
                .catch((error) => console.log(error.stack));
            });
}

const signIn = (request, response) => {
    const { login, password } = request.body;
    const password_hash = md5(password);
    getToken()
        .then((token) => {
            pool
                .query(`SELECT * FROM sign_in('${ login }', '${ password_hash }', '${ token }')`)
                .then((results) => {
                    const result_object = results.rows[0];
                    result_object.role = 'user';
                    response.status(200).json(result_object);
                })
                .catch((error) => console.log(error.stack));
        });
}

const signOut = (request, response) => {
    const token = request.headers.token;
    pool
        .query(`SELECT sign_out('${ token }')`)
        .then((results) => {
            response.status(200).json(results.rows);
        })
        .catch((error) => console.log(error.stack));
}
//
// const deleteRecipe = (request, response) => {
//     const id = request.params.id;
//     console.log(request.headers);
//     const token = request.headers.token;
//     pool
//         .query(`SELECT delete_item('${ token }', ${ id }, true)`)
//         .then((results) => {
//             response.status(200).json(results.rows);
//         })
//         .catch((error) => console.log(error.stack));
// }

// const deleteComment = (request, response) => {
//     const id = request.params.id;
//     const token = request.headers.token;
//     pool
//         .query(`SELECT delete_item('${ token }', ${ id }, false)`)
//         .then((results) => {
//             response.status(200).json(results.rows);
//         })
//         .catch((error) => console.log(error.stack));
// }

const createComment = (request, response) => {
    const { text, recipe_id } = request.body;
    const token = request.headers.token;
    pool
        .query(`SELECT create_comment('${ token }', '${ text }', ${ recipe_id })`)
        .then((results) => {
            response.status(200).json(results.rows);
        })
        .catch((error) => console.log(error.stack));
}
//
// const grantAdmin = (request, response) => {
//     const { id } = request.body;
//     const token = request.headers.token;
//     pool
//         .query(`SELECT grant_admin('${ token }', ${ id })`)
//         .then((results) => {
//             response.status(200).json(results.rows);
//         })
//         .catch((error) => console.log(error.stack));
// }
//
// const withdrawAdmin = (request, response) => {
//     const id = request.params.id;
//     const token = request.headers.token;
//     pool
//         .query(`SELECT withdraw_admin('${ token }', ${ id })`)
//         .then((results) => {
//             response.status(200).json(results.rows);
//         })
//         .catch((error) => console.log(error.stack));
// }
//
// const deleteUser = (request, response) => {
//     const id = request.params.id;
//     const token = request.headers.token;
//     pool
//         .query(`SELECT delete_user('${ token }', ${ id })`)
//         .then((results) => {
//             response.status(200).json(results.rows);
//         })
//         .catch((error) => console.log(error.stack));
// }

const editLogin = (request, response) => {
    const new_login = request.body.new_login;
    const token = request.headers.token;
    pool
        .query(`SELECT edit_login('${ token }', '${ new_login }')`)
        .then((results) => {
            response.status(200).json(results.rows[0]);
        })
        .catch((error) => console.log(error.stack));
}

const editPassword = (request, response) => {
    const { old_password, new_password } = request.body;
    const old_password_hash = md5(old_password);
    const new_password_hash = md5(new_password);
    const token = request.headers.token;
    pool
        .query(`SELECT edit_password('${ token }', '${ old_password_hash }', '${ new_password_hash }')`)
        .then(({ edit_password: results }) => {
            response.status(200).json(results.rows[0]);
        })
        .catch((error) => console.log(error.stack));
}

const createRecipe = (request, response) => {
    const { title, text, time_minutes, ingredients_array } = request.body;
    const link = `/photos/${request.file.filename}`
    const token = request.headers.token;

    pool
        .query(`SELECT create_recipe('${ token }', '${ title }', '${ text }', '${ time_minutes }', '${ link }')`)
        .then((results) => {
            const recipe_id = results.rows[0].create_recipe;
            const ingredients = JSON.parse(ingredients_array);
            const limiter = ingredients.length;
            for (let i = 0; i < limiter; i++) {
                let { ingredient_name, ingredient_quantity, ingredient_unit_name } = ingredients[i];
                pool
                    .query(`SELECT add_ingredient(${ recipe_id }, '${ ingredient_name }', ${ ingredient_quantity }, '${ ingredient_unit_name }')`)
                    .then(() => {
                        if (i === limiter - 1) response.status(200).json(recipe_id);
                    })
                    .catch((error) => console.log(error.stack));
            }
            if (limiter === 0) {
                response.status(200).json(recipe_id);
            }
        })
        .catch((error) => console.log(error.stack));
}

const getRecipe = (request, response) => {
    const id = request.params.id;
    const token = request.headers.token;
    pool
        .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, description AS recipe_text, likes AS recipe_likes,
         photo_link AS recipe_picture, post_datetime AS recipe_post_time, author_id AS recipe_author_id, time_minutes AS recipe_cooking_time,
         login AS recipe_author_login FROM (recipe JOIN "user" ON author_id = "user".id) WHERE recipe.id = ${ id }`)
        .then((result) => {
            const recipe_info = result.rows[0];
            pool
                .query(`SELECT name AS ingredient_name, amount AS ingredient_amount, unit_name AS ingredient_unit_name FROM ingredients WHERE recipe_id = ${ recipe_info.recipe_id }`)
                .then((result) => {
                    recipe_info.recipe_ingredients = result.rows || [];
                    pool
                        .query(`SELECT comment.id AS comment_id, author_id AS comment_author_id,
                                    login AS comment_author_login, text AS comment_text,
                                    post_datetime AS comment_post_time
                                    FROM (comment JOIN "user" ON "user".id = author_id) WHERE recipe_id = ${ id }`)
                        .then((result) => {
                            recipe_info.recipe_comments = result.rows || [];
                            if (token == null) response.status(200).json(recipe_info);
                            else {
                                pool
                                    .query(`SELECT did_like('${ token }', ${ id }, true)`)
                                    .then((result) => {
                                        recipe_info.recipe_is_liked = result.rows[0].did_like;
                                        response.status(200).json(recipe_info);
                                    })
                                    .catch((error) => console.log(error.stack));
                            }
                        })
                        .catch((error) => console.log(error.stack));
                })
                .catch((error) => console.log(error.stack));
        })
        .catch((error) => console.log(error.stack));
}

// const getUsersRecipes = (request, response) => {
//     const id = request.params.id;
//     const token = request.headers.token;
//
//     if (token == null) {
//         pool
//             .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, description AS recipe_text, likes AS recipe_likes,
//          photo_link AS recipe_picture, post_datetime AS recipe_post_time FROM recipe WHERE author_id = ${ id }`)
//             .then((result) => {
//                 response.status(200).json(result.rows);
//             })
//             .catch((error) => console.log(error.stack));
//     } else {
//         pool
//             .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, description AS recipe_text, likes AS recipe_likes,
//             photo_link AS recipe_picture, post_datetime AS recipe_post_time FROM recipe WHERE author_id = ${ id }`)
//             .then((result) => {
//                 const recipes = result.rows;
//                 const limiter = recipes.length;
//                 if (limiter === 0) response.status(200).json(recipes);
//                 for (let i = 0; i < limiter; i++) {
//                     pool
//                         .query(`SELECT did_like('${ token }', ${ recipes[i].recipe_id }, true)`)
//                         .then((result) => {
//                             recipes[i].recipe_is_liked = result.rows[0].did_like;
//                             if (i === limiter - 1) response.status(200).json(recipes);
//                         })
//                         .catch((error) => console.log(error.stack));
//                 }
//             })
//             .catch((error) => console.log(error.stack));
//     }
// }

const getTimeRecipes = (request, response, time_type) => {
    const token = request.headers.token;
    let restriction;
    switch (time_type) {
        case 'medium':
            restriction = 'time_minutes > 30 AND time_minutes <= 60 ORDER BY time_minutes';
            break;
        case 'long':
            restriction = 'time_minutes > 60 ORDER BY time_minutes';
            break;
        default:
            restriction = 'time_minutes <= 30 ORDER BY time_minutes';
    }
    if (token == null) {
        pool
            .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe join "user" ON author_id = "user".id) WHERE ${ restriction }`)
            .then((result) => {
                response.status(200).json(result.rows);
            })
            .catch((error) => console.log(error.stack));
    } else {
        pool
            .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe join "user" ON author_id = "user".id) WHERE ${ restriction }`)
            .then((result) => {
                const recipes = result.rows;
                const limiter = recipes.length;
                if (limiter === 0) response.status(200).json(recipes);
                for (let i = 0; i < limiter; i++) {
                    pool
                        .query(`SELECT did_like('${ token }', ${ recipes[i].recipe_id }, true)`)
                        .then((result) => {
                            recipes[i].recipe_is_liked = result.rows[0].did_like;
                            if (i === limiter - 1) response.status(200).json(recipes);
                        })
                        .catch((error) => console.log(error.stack));
                }
            })
            .catch((error) => console.log(error.stack));
    }
}

const getShortRecipes = (request, response) => {
    getTimeRecipes(request, response, 'short');
}

const getMediumRecipes = (request, response) => {
    getTimeRecipes(request, response, 'medium');
}

const getLongRecipes = (request, response) => {
    getTimeRecipes(request, response, 'long');
}

const getFavouriteRecipes = (request, response) => {
    const token = request.headers.token;

    pool
        .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe_likes JOIN token ON recipe_likes.user_id = token.user_id)
        JOIN recipe on recipe_id = id JOIN "user" ON author_id = "user".id WHERE token = '${ token }'`)
        .then((result) => {
            const recipes = result.rows;
            recipes.forEach((recipe) => recipe.recipe_is_liked = true);
            response.status(200).json(recipes);
        })
        .catch((error) => console.log(error.stack));
}

const getBestRecipes = (request, response) => {
    const token = request.headers.token;

    if (token == null) {
        pool
            .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe join "user" ON author_id = "user".id) WHERE BY likes DESC LIMIT 10`)
            .then((result) => {
                response.status(200).json(result.rows);
            })
            .catch((error) => console.log(error.stack));
    } else {
        pool
            .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe join "user" ON author_id = "user".id) ORDER BY likes DESC LIMIT 10`)
            .then((result) => {
                const recipes = result.rows;
                const limiter = recipes.length;
                if (limiter === 0) response.status(200).json(recipes);
                for (let i = 0; i < limiter; i++) {
                    pool
                        .query(`SELECT did_like('${ token }', ${ recipes[i].recipe_id }, true)`)
                        .then((result) => {
                            recipes[i].recipe_is_liked = result.rows[0].did_like;
                            if (i === limiter - 1) response.status(200).json(recipes);
                        })
                        .catch((error) => console.log(error.stack));
                }
            })
            .catch((error) => console.log(error.stack));
    }
}

const getNewRecipes = (request, response) => {
    const token = request.headers.token;

    if (token == null) {
        pool
            .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe join "user" ON author_id = "user".id) ORDER BY post_datetime DESC`)
            .then((result) => {
                response.status(200).json(result.rows);
            })
            .catch((error) => console.log(error.stack));
    } else {
        pool
            .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, likes AS recipe_likes, time_minutes AS 
            recipe_cooking_time, photo_link AS recipe_picture, post_datetime AS recipe_post_time, login AS
             recipe_author_login FROM (recipe join "user" ON author_id = "user".id) ORDER BY post_datetime DESC`)
            .then((result) => {
                const recipes = result.rows;
                const limiter = recipes.length;
                if (limiter === 0) response.status(200).json(recipes);
                for (let i = 0; i < limiter; i++) {
                    pool
                        .query(`SELECT did_like('${ token }', ${ recipes[i].recipe_id }, true)`)
                        .then((result) => {
                            recipes[i].recipe_is_liked = result.rows[0].did_like;
                            if (i === limiter - 1) response.status(200).json(recipes);
                        })
                        .catch((error) => console.log(error.stack));
                }
            })
            .catch((error) => console.log(error.stack));
    }
}

// const search = (request, response) => {
//     const token = request.headers.token;
//     const search_string = request.query.search_string.toLowerCase();
//
//     if (token == null) {
//         pool
//             .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, description AS recipe_text, likes AS recipe_likes,
//          photo_link AS recipe_picture, post_datetime AS recipe_post_time FROM recipe WHERE LOWER(title) LIKE '%${ search_string }%'`)
//             .then((result) => {
//                 response.status(200).json(result.rows);
//             })
//             .catch((error) => console.log(error.stack));
//     } else {
//         pool
//             .query(`SELECT recipe.id AS recipe_id, title AS recipe_title, description AS recipe_text, likes AS recipe_likes,
//          photo_link AS recipe_picture, post_datetime AS recipe_post_time FROM recipe WHERE LOWER(title) LIKE '%${ search_string }%'`)
//             .then((result) => {
//                 const recipes = result.rows;
//                 const limiter = recipes.length;
//                 if (limiter === 0) response.status(200).json(recipes);
//                 for (let i = 0; i < limiter; i++) {
//                     pool
//                         .query(`SELECT did_like('${ token }', ${ recipes[i].recipe_id }, true)`)
//                         .then((result) => {
//                             recipes[i].recipe_is_liked = result.rows[0].did_like;
//                             if (i === limiter - 1) response.status(200).json(recipes);
//                         })
//                         .catch((error) => console.log(error.stack));
//                 }
//             })
//             .catch((error) => console.log(error.stack));
//     }
// }

const likeRecipe = (request, response) => {
    const token = request.headers.token;
    const recipe_id = request.body.id;

    pool
        .query(`SELECT like('${ token }', ${ recipe_id }, true)`)
        .then((result) => response.status(200).json(result.rows))
        .catch((error) => console.log(error.stack));
}

// const getAllUsers = (request, response) => {
//     const token = request.headers.token;
//     pool
//         .query(`SELECT * FROM get_all_users('${ token }')`)
//         .then((result) => response.status(200).json(result.rows))
//         .catch((error) => console.log(error.stack));
// }
//
// const getAllAdmins = (request, response) => {
//     const token = request.headers.token;
//     pool
//         .query(`SELECT * FROM get_all_admins('${ token }')`)
//         .then((result) => response.status(200).json(result.rows))
//         .catch((error) => console.log(error.stack));
// }

// const getUserInfo = (request, response) => {
//     const id = request.params.id;
//     pool
//         .query(`SELECT login, rating FROM "user" WHERE id = ${ id })`)
//         .then((result) => response.status(200).json(result.rows))
//         .catch((error) => console.log(error.stack));
// }
module.exports = {
    checkLogin,
    createUser,
    signIn,
    signOut,
    // deleteRecipe,
    // deleteComment,
    createComment,
    // grantAdmin,
    // withdrawAdmin,
    // deleteUser,
    editLogin,
    editPassword,
    createRecipe,
    getRecipe,
    // getUsersRecipes,
    getShortRecipes,
    getMediumRecipes,
    getLongRecipes,
    getFavouriteRecipes,
    getBestRecipes,
    getNewRecipes,
    // search,
    likeRecipe,
//     getAllUsers,
//     getAllAdmins,
//     getUserInfo
}