# frozen_string_literal: true

class Admins::RegistrationsController < Devise::RegistrationsController
  layout "application_admin"
  
  include Accessible
  skip_before_action :check_user, except: [ :new, :create ]
  before_action :configure_sign_up_params, only: [ :create ]
  # before_action :configure_account_update_params, only: [:update]

  def new
    build_resource({})
    resource.build_profile
    respond_with resource
  end

  protected

  def sign_up_params
    devise_parameter_sanitizer.sanitize(:sign_up) { |user| user.permit(permitted_attributes) }
  end

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: permitted_attributes)
  end

  def permitted_attributes
    [ :email, :password_confirmation, :remember_me, profile_attributes: %i[first_name last_name middle_name contact_no position] ]
  end

  def after_sign_up_path_for(resource)
    flash[:notice] = "Welcome! You have signed up successfully." 
    stored_location_for(resource) || account_path
  end  
end
