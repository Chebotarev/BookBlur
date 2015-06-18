class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render json: @comments
  end

  def create
    @commment = Comment.new(comment_params)
    @comment.owner_id = current_user.id

    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessible_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:book_id, :body)
  end
end
