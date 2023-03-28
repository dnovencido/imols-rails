class ApplicationController < ActionController::Base
    helper_method :user?, :profile

    protected 

    def user?
       !!current_user
    end
    
    def profile 
        user? ? current_user.user_profile : current_admin.profile
    end
end
