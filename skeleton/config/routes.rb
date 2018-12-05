Rails.application.routes.draw do
  # Your routes here!
  namespace :api, defaults: { format: :json } do
    resources :gifts, only: [:index, :show]
    resources :guests, only: [:index, :show] do
      resources :parties, only: :index
    end
    resources :parties, only: [:show]
  end
end
