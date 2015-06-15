class Api::ApiController < ApplicationController
  private
  
  def ensure_logged_in
    unless logged_in?
      render json: ["You must be signed in to do that"], status: :unauthorized
    end
  end
end
