class Api::MarksController < Api::ApiController
  before_action :ensure_logged_in

  def index
    @marks = Mark.all
  end

  def create
    @mark = Mark.new(mark_params)
    @mark.owner_id = current_user.id

    if @mark.save
      render json: @mark
    else
      render json: @mark.errors.full_messages, status: :unprocessible_entity
    end
  end

  private

  def mark_params
    params.require(:mark).permit(:book_id, :location)
  end
end
