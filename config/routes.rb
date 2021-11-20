Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'projects/index'
      post 'projects/create'
      put 'projects/update'
      delete 'projects/:id', to: 'projects#destroy'

      get 'users/index'
      post 'users/create'
      put 'users/update'
      delete 'users/:id', to: 'users#destroy'
    end
  end
  root 'homepage#index'
  get 'homepage', to: 'homepage#index'
  get 'homepage/dashboard', to: 'dashboard#index'
  get 'homepage/projects', to: 'projects#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
