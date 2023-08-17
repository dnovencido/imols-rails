class Admins::ServicesController < ApplicationController
    layout "application_admin"
    
    before_action :authenticate_admin!
    before_action :find_all_services
    before_action :set_service, only: [ :show, :edit, :update, :destroy ]

    def index 
    end

    def new  
        @service = Service.new
        @service.categories.build
    end

    def create
        @service = Service.new(service_params)

        if @service.save
            flash[:notice] = "Service was saved successfully."
            redirect_to [:admins, @service]
        else
            render 'new', status: :unprocessable_entity
        end
    end

    def show
    end

    def edit
    end

    def update
        if @service.update(service_params)
            flash[:notice] = "Service was updated successfully."
            redirect_to admins_service_path(@service)
        else
            render 'edit', status: :unprocessable_entity
        end
    end

    def destroy
        @service.destroy
        flash[:notice] = "Service was deleted."
        redirect_to admins_services_path, status: :see_other
    end

    private

    def service_params
        params.require(:service).permit(
            :name, :code, :description, categories_attributes: [ :id, :name, :category_code, :category_description ]
        )
    end

    def set_service
        @service = Service.find(params[:id])
    end

    def find_all_services
        @services = Service.all
    end

end
