require 'rails_helper'

RSpec.describe Api::V1::CerealsController, type: :controller do
  let!(:wheaties) { Cereal.create(name: "Wheaties", description: "Tastes like cardboard")}
  let!(:chex) { Cereal.create(name: "Chex", description: "Tastes like corn")}

  describe "GET#index" do
    it "should return our cereals" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["cereals"].length).to eq 2
      expect(returned_json["cereals"].first["name"]).to eq "Wheaties"
      expect(returned_json["cereals"].last["name"]).to eq "Chex"
    end
  end
end
