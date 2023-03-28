class Service < ApplicationRecord
    validates :name, presence: true
    validates :code, presence: true
    validates :description, presence: true
end
