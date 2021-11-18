class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[ show edit update destroy ]

  def index
    @users = Project.all
    render json: @users
  end

  def show
    if @user
      render json: @user
    else
      render json: @user.errors
  end

  def new
    @user = user.new
  end

  def edit
  end

  def create
    @user = user.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors
    end
  end

  def destroy
    @user.destroy

    render json: { notice: 'user was successfully removed.' }
  end

  private
    def set_user
      @user = user.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email)
    end

  end
end
