<?php

class PostTableSeeder extends Seeder{

    public function run(){
        DB::table('posts')->delete();

        Post::create(
            array(
                'title'     => 'Welcome to Vinylpress.',
                'text'      => 'Vinylpress offers a community to discuss vinyl collecting',
                'author_id' => 1
            )
        );
    }

}