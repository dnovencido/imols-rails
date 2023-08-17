Rails.application.routes.draw do
  match '/404', via: :all, to: 'errors#not_found'
  match '/500', via: :all, to: 'errors#internal_server_error'
  
  root to: "pages#home"

  devise_for :admins, path: 'admins', controllers: {
    sessions: 'admins/sessions',
    registrations: 'admins/registrations'
  }

  namespace :admins do
    get 'dashboard', to: 'pages#dashboard'
    resources :services
    resources :categories, only: [ :destroy ]
    resources :forms
  end

  namespace :users do
    resources :services, only: [ :index, :show ]
  end

  devise_for :users, path: 'users', controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'account', to: 'pages#account'
  get 'dashboard', to: 'pages#dashboard'

  namespace :services do
    resources :service_transactions
  end
end
