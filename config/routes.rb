Rails.application.routes.draw do
  root 'cereals#index'
  namespace :api do
    namespace :v1 do
      resources :cereals, only: [:index]
    end
  end
end
