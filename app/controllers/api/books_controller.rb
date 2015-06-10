class Api::BooksController < ApplicationController
  before_action :ensure_logged_in

  def index
    @books = Book.all

    render json: @books
  end

  def show
    @book = Book.find(params[:id])
    render @book.url
  end

  private

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
