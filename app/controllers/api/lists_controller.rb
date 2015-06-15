class Api::ListsController < Api::ApiController
  before_action :ensure_logged_in

  def index
    @lists = List.all
    @lists.includes :books
  end

  def create
    @list = List.new(list_params)
    @list.owner_id = current_user.id

    if @list.save
      render :new
    else
      render json: @list.errors.full_messages, status: :unprocessible_entity
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :description, book_ids: [])
  end
end
