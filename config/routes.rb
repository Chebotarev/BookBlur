Rails.application.routes.draw do
  root to: "books#index"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    get 'books/search', to: "books#search"
    resources :books, only: [:index, :show]
    resources :lists, only: [:index, :create]
  end
end
