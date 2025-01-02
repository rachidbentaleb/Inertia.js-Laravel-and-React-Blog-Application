<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home',['name'=>'Rachid']);
// });

//Route::resource('posts',PostController::class); //pour définir un ensemble complet de routes RESTful (CRUD) pour une ressource


Route::resource('posts',PostController::class)
        ->except('index');  //except('index'), ce qui signifie que la route pour l'action index (GET /posts) n'est pas générée


Route::get('/',[PostController::class,'index']); //Au lieu d'accéder à la liste des articles via /posts, vous avez décidé que l'action index serait accessible directement via 

