module ApplicationHelper
    def initials(name)
        first, last = name.split(" ")
        return "#{first[0]}.#{last[0]}"
    end

    def active_class(link_path)
        current_page?(link_path) ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 active" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
    end
end
