class IssuesController < ApplicationController

  def show
  end

  def index
    @issues = Issue.all
    render json: @issues
  end

end
