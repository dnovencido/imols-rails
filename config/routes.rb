Rails.application.routes.draw do
  root to: "pages#home"

  devise_for :admins, path: 'admins', controllers: {
    sessions: 'admins/sessions',
    registrations: 'admins/registrations'
  }

  namespace :admins do
    get 'dashboard', to: 'pages#dashboard'
    resources :services
  end

  devise_for :users, path: 'users', controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'account', to: 'pages#account'
  get 'dashboard', to: 'pages#dashboard'
  
end
