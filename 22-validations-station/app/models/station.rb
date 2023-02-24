class Station < ApplicationRecord
    has_many :platforms

    validates :name, presence: true,
        length: {minimum: 3},
        uniqueness: true
        
end
