class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render json: {
        id: @user.id,
        email: @user.email,
        username: @user.username,
        session_token: @user.session_token,
      }
    else
      render json: ["Incorrect Email or Password"],
      status: 401 
    end
  end

  def destroy
    if current_user 
      logout!
      render json: {}
    else 
      render json: ["No account logged in"],
      status: 401
    end
  end


end
