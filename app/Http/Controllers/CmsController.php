<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CmsController extends Controller
{
    public function getCmsPage($identifier)
    {
        //here we would normally to 
        // $page = CmsPages::select(['id', 'title' ...])->where('slug' $identifier)->get();

        $path = storage_path() . "/json/${identifier}.json";

        $json = json_decode(file_get_contents($path), true); 

        return $json;
    }
}
