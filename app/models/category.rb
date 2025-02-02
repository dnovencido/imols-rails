class Category < ApplicationRecord
    before_save :generate_slug

    belongs_to :service
    has_one :form
    alias_attribute :category_description, :description
    alias_attribute :category_code, :code

    def to_param
        slug
    end

    private

    def generate_slug
        self.slug = name.parameterize if name
    end
end