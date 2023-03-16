Rails.application.routes.draw do
  root to: "pages#home"

  devise_for :admins, path: 'admins', controllers: {
    sessions: 'admins/sessions'
  }

  devise_for :users, path: 'users', controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get 'account', to: 'pages#account'

end
