<?php

class CommentTableSeeder extends Seeder{

    public function run(){
        DB::table('comments')->delete();

        Comment::create(
            array(
                'text'      => 'Great post!',
                'author_id' => 2,
                'post_id'   => 1
            )
        );
    }

}