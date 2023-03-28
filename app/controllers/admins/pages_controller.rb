class Admins::PagesController < ApplicationController
    layout "application_admin"

    before_action :authenticate_admin!

    def dashboard

    end
end