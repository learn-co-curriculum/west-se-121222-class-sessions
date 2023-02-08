class Dev < ActiveRecord::Base
    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        # self.freebies.any? { |f| f.item_name == item_name } 
        # self.freebies.pluck(:item_name).include?(item_name)
        # self.freebies.find_by(item_name: item_name) ? true : false
        !!self.freebies.find_by(item_name: item_name)
    end

    def give_away(dev, freebie)
end
