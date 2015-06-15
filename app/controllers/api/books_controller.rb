class Api::BooksController < Api::ApiController
  before_action :ensure_logged_in

  def index
    @books = Book.all
    @books.includes :marks
  end

  def show
    @book = Book.find(params[:id])
  end

  def search
    if params[:query].present?
      @books = Book.where("title ~ ?", params[:query])
    else
      @books = Book.none
    end

    render json: @books
  end
end
