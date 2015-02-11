<?php

class PostController extends \BaseController {

	/**
	 * Display a listing of the posts.
	 *
	 * @return Response
	 */
	public function index()
	{
		$posts = Post::all();
		return $posts;
	}


	/**
	 * Show the form for creating a new posts.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Update the specified posts in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from posts.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
