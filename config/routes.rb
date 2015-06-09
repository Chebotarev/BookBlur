Rails.application.routes.draw do
  get 'books/index'

  root "sessions#new"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
