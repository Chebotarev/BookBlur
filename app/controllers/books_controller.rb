class BooksController < ApplicationController
  before_action :ensure_logged_in

  def index
    @books = Book.all
  end

  private

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
