class Api::BooksController < ApplicationController
  before_action :ensure_logged_in

  def index
    @books = Book.all
    @books.includes :marks
  end

  def show
    @book = Book.find(params[:id])

    render json: @book
  end

  def search
    if params[:query].present?
      @books = Book.where("title ~ ?", params[:query])
    else
      @books = Book.none
    end

    render json: @books
  end

  private


  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
