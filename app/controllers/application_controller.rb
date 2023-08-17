class ApplicationController < ActionController::Base
    helper_method :user?, :profile
    layout :set_layout

    protected 

    def set_layout
        if current_user
            "application_user"
        elsif current_admin
            "application_admin"
        else
            "application"
        end
    end

    def user?
       !!current_user
    end
    
    def profile 
        user? ? current_user.user_profile : current_admin.profile
    end
end
