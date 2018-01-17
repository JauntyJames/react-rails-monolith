class Api::V1::CerealsController < ApplicationController
  def index
    render json: Cereal.all
  end
end
