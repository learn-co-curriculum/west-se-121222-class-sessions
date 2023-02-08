class Company < ActiveRecord::Base

    def self.oldest_company
        # self.all.min_by {|company| company.founding_year} # vanilla Ruby
        # self.all.min_by(&:founding_year)
        # ======
        # oldest_year = Company.minimum(:founding_year)
        # Company.find_by(founding_year: oldest_year)
        # ======
        self.order(:founding_year).first
    end

    has_many :freebies
    has_many :devs, through: :freebies

    def give_freebie(dev, item_name, value)
        # Freebie.create(
        #     dev: dev,
        #     company: self,
        #     item_name: item_name,
        #     value: value
        # )
        self.freebies.create(dev: dev, item_name: item_name, value: value)
    end 
end
