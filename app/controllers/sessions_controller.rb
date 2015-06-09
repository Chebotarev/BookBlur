class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      flash.now[:errors] = ["Incorrect Email/Password Combination"]
      render :new
    else
      login!(user)
      render json: user
    end
  end

  def destroy

  end
end
