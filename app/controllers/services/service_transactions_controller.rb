class Services::ServiceTransactionsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_form
    before_action :set_service_transaction, only: [ :show, :edit, :update, :destroy ]

    def new
        @service_transaction = ServiceTransaction.new
    end

    def show
    end

    def create
        @service_transaction = ServiceTransaction.new(service_transaction_params)

        if @service_transaction.save
            flash[:notice] = "Service was saved successfully."
            redirect_to [:services, @service_transaction]
        else
            render 'new', status: :unprocessable_entity
        end
    end

    private

    def service_transaction_params
        params.require(:service_transaction).permit(
            :category_id, service_transaction_details_attributes: [ :service_details => {} ]
        )
    end

    def set_form
        case params[:form]
            when 'AC', 'CMTS', 'FLM', 'SS'
             @form = 'form-cp'
        end
    end

    def set_service_transaction
        @service_transaction = ServiceTransaction.find(params[:id])
    end
end