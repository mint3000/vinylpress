<?php

class CommentController extends \BaseController {

	/**
	 * Display a listing of the comments.
	 *
	 * @return Response
	 */
	public function index()
	{
		$comments = Comment::all();
		return $comments;
	}


	/**
	 * Show the form for creating a new comments.
	 *
	 * @return Response
	 */
	public function store()
	{
		$newComment = new Comment;
		$newComment->text = Input::get('content');
		$newComment->author_id = Input::get('author_id');
		$newComment->post_id = Input::get('post_id');

		if($newComment->save()){
			return array('status'=>'Comment Added');
		}

		return array('status'=>'Comment Not Added');
	}


	/**
	 * Show  specified comments based on post id
	 *
	 * @param $postId
	 * @return Response
	 */
	public function show($postId){
		$comments = Comment::where('post_id', '=', $postId)->get();
		return $comments;
	}


	/**
	 * Update the specified comments in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$comment = Comment::find($id);

		if ($comment){
			$comment->text = Input::get('content');

			if ($comment->save()){
				return array('status' => 'Comment Updated');
			}else{
				return array('status' => 'Comment Not Updated');
			}
		}else{
			return array('status' => 'Comment Not Found');
		}
	}


	/**
	 * Remove the specified resource from comments.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$comment = Comment::find($id);

		$comment->delete();
	}


}
