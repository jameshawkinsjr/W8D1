class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      # redirect_to somewhere
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
