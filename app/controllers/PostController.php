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
	public function store()
	{
		$newPost = new Post;
		$newPost->title = Input::get('title');
		$newPost->text = Input::get('content');
		$newPost->author_id = Input::get('userId');

		if($newPost->save()){
			return array('status'=>'Post Added');
		}

		return array('status'=>'Post Not Added');
	}


	/**
	 * Show a specified post
	 *
	 * @param $id
	 * @return Response
	 */
	public function show($id){
		return Post::find($id);
	}


	/**
	 * Update the specified posts in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$post = Post::find($id);

		if ($post){
			$post->title = Input::get('title');
			$post->text = Input::get('content');

			if ($post->save()){
				return array('status' => 'Post Updated');
			}else{
				return array('status' => 'Post Not Updated');
			}
		}else{
			return array('status' => 'Post Not Found');
		}
	}


	/**
	 * Remove the specified resource from posts.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$post = Comment::find($id);

		$post->delete();
	}


}
