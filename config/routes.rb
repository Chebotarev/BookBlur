Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    get 'books/search', to: "books#search"
    resources :books, only: [:index, :show]
    resources :lists, only: [:index, :create, :show, :update]
    resources :marks, only: [:index, :create, :show, :update]
  end
end
