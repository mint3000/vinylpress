<?php

class UserTableSeeder extends Seeder{

    public function run(){
        DB::table('users')->delete();

        User::create(
            array(
                'first_name'    => 'Ryan',
                'last_name'     => 'Hull',
                'email'         => 'mintdesign3000@gmail.com',
                'username'      => 'admin',
                'password'      => Hash::make('password')
            )
        );

        User::create(
            array(
                'first_name'    => 'Carl',
                'last_name'     => 'Collector',
                'email'         => 'vinyladdict@gmail.com',
                'username'      => 'author',
                'password'      => Hash::make('password')
            )
        );
    }

}