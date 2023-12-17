class Services::ServiceTransactionsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_service_transaction, only: [ :show, :edit, :update, :destroy ]

    def index
        @service_transactions = ServiceTransaction.all
    end

    def new
        @service_transaction = ServiceTransaction.new
        @service_transaction.category_id = params[:id]
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

    def edit
    end

    def update
        if @service_transaction.update(service_transaction_params)
            flash[:notice] = "Application was updated successfully."
            redirect_to services_service_transaction_path(@service_transaction)
        else
            render 'edit', status: :unprocessable_entity
        end
    end

    private

    def service_transaction_params
        params.require(:service_transaction).permit(
            :category_id, :declaration, :service_details => {}, :applicant_details => {}, particulars: [ :item => {} ]
        )
    end

    def set_service_transaction
        @service_transaction = ServiceTransaction.find(params[:id])
    end
end