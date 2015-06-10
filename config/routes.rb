Rails.application.routes.draw do
  root to: "books#index"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api do
    resources :books, only: [:index, :show]
  end
end
