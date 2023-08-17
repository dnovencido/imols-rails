class Admins::FormsController < ApplicationController
    before_action :authenticate_admin!
    before_action :set_form, only: [ :show, :edit, :update, :destroy ]
    before_action :set_categories, only: [ :new, :create, :edit, :update ]

    def index
        @forms = Form.all
    end

    def new  
        @form = Form.new
    end

    def create
        @form = Form.new(form_params)

        if @form.save
            flash[:notice] = "Form was saved successfully."
            redirect_to [:admins, @form]
        else
            render 'new', status: :unprocessable_entity
        end
    end

    def show
    end

    def edit
    end

    def update
        if @form.update(form_params)
            flash[:notice] = "Form was updated successfully."
            redirect_to admins_form_path(@form)
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

    def form_params
        params.require(:form).permit(
            :category_id, :name, :form_type
        )
    end

    def set_form
        @form = Form.find(params[:id])
    end

    def set_categories
        @categories = Category.all
    end

end