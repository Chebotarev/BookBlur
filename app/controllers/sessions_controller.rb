class SessionsController < ApplicationController
  before_action :check_logged_in, only: [:new]

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
      redirect_to root_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  private

  def check_logged_in
    redirect_to root_url if logged_in?
  end
end
