class Admins::ServicesController < ApplicationController
    layout "application_admin"
    
    before_action :authenticate_admin!
    before_action :find_all_services

    def index 
    end

    def new  
        @service = Service.new
    end

    def create
        @service = Service.new(service_params)

        if @service.save
            flash[:notice] = "Service was saved successfully."
            redirect_to @service
        else
            render 'new', status: :unprocessable_entity
        end
    end

    private

    def service_params
        params.require(:service).permit(
            :name, :code, :description
        )
    end

    def find_all_services
        @services = Service.all
    end

end
