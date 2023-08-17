class Admins::CategoriesController < ApplicationController

    before_action :set_category, only: [ :destroy ]

    def destroy
        @category.destroy
        respond_to do |format|
            format.turbo_stream { render turbo_stream: turbo_stream.remove("category-item-#{@category.id}") }
        end
    end

    private

    def set_category
        @category = Category.find(params[:id])
    end
end