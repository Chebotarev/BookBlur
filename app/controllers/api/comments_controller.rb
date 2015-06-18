class Api::CommentsController < ApplicationController
  def create
    @commment = Comment.new(comment_params)
    @comment.owner_id = current_user.id

    if @comment.save
      render :new
    else
      render json: @comment.errors.full_messages, status: :unprocessible_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:book_id, :body)
  end
end
